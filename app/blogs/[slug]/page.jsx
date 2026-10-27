import React from "react";
import { notFound } from "next/navigation";
import { blogsData } from "@/data/blogsData";
import SiemSoarBlogDetail from "../components/SiemSoarBlogDetail";
import ModernSocBlogDetail from "../components/ModernSocBlogDetail";
import NetworkObservabilityBlogDetail from "../components/NetworkObservabilityBlogDetail";
import NetworkModernizationBlogDetail from "../components/NetworkModernizationBlogDetail";
import SdWanBlogDetail from "../components/SdWanBlogDetail";
import CloudMigrationBlogDetail from "../components/CloudMigrationBlogDetail";
import StaffAugmentationBlogDetail from "../components/StaffAugmentationBlogDetail";
import EnterpriseRagBlogDetail from "../components/EnterpriseRagBlogDetail";
import TerraformAnsibleBlogDetail from "../components/TerraformAnsibleBlogDetail";
import GenericBlogDetail from "../components/GenericBlogDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug || b.id === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | WeRoute",
      description: "The requested blog article could not be found."
    };
  }

  const title = blog.seo?.h1 || blog.title;
  const description = blog.seo?.metaDescription || blog.excerpt;
  const keywords = [
    ...(blog.seo?.primaryKeywords || []),
    ...(blog.seo?.secondaryKeywords || []),
    blog.category,
    "WeRoute",
    "Enterprise Technology"
  ];

  return {
    title: `${title} | WeRoute`,
    description,
    keywords,
    openGraph: {
      title: `${title} | WeRoute`,
      description,
      type: "article",
      url: `https://weroute.com/blogs/${blog.slug}`,
      images: [
        {
          url: blog.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | WeRoute`,
      description,
      images: [blog.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"]
    }
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug || b.id === slug);

  if (!blog) {
    notFound();
  }

  // Schema.org Graph: BlogPosting + FAQPage (six questions)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": blog.seo?.h1 || blog.title,
        "description": blog.seo?.metaDescription || blog.excerpt,
        "datePublished": "2026-10-06T00:00:00+00:00",
        "dateModified": "2026-10-06T00:00:00+00:00",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://weroute.com/blogs/${blog.slug}`
        },
        "author": {
          "@type": "Organization",
          "name": blog.author,
          "url": "https://weroute.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "WeRoute",
          "url": "https://weroute.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://weroute.com/favicon.ico"
          }
        },
        "keywords": [
          ...(blog.seo?.primaryKeywords || []),
          ...(blog.seo?.secondaryKeywords || [])
        ].join(", ")
      },
      ...(blog.faqs && blog.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": blog.faqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {blog.slug === "how-we-implemented-siem-and-soar-large-enterprise" ? (
        <SiemSoarBlogDetail blog={blog} />
      ) : blog.slug === "from-alert-fatigue-to-automated-response-building-a-modern-soc" ? (
        <ModernSocBlogDetail blog={blog} />
      ) : blog.slug === "network-monitoring-vs-network-observability" ? (
        <NetworkObservabilityBlogDetail blog={blog} />
      ) : blog.slug === "legacy-network-to-modern-enterprise-network" ? (
        <NetworkModernizationBlogDetail blog={blog} />
      ) : blog.slug === "sd-wan-multi-site-enterprises" ? (
        <SdWanBlogDetail blog={blog} />
      ) : blog.slug === "cloud-migration-planning-workloads" ? (
        <CloudMigrationBlogDetail blog={blog} />
      ) : blog.slug === "staff-augmentation-vs-dedicated-teams" ? (
        <StaffAugmentationBlogDetail blog={blog} />
      ) : blog.slug === "building-enterprise-rag-systems" ? (
        <EnterpriseRagBlogDetail blog={blog} />
      ) : blog.slug === "terraform-and-ansible-enterprise-infrastructure" ? (
        <TerraformAnsibleBlogDetail blog={blog} />
      ) : (
        <GenericBlogDetail blog={blog} />
      )}
    </>
  );
}


