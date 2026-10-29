"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  Share2,
  Check,
  ChevronRight,
  Award,
  Layers,
  Database,
  Search,
  Lock,
  Cpu
} from "lucide-react";
import RagArchitectureDiagram from "./RagArchitectureDiagram";
import DocumentIngestionPipelineDiagram from "./DocumentIngestionPipelineDiagram";
import PermissionAwareRagDiagram from "./PermissionAwareRagDiagram";
import BlogFaqAccordion from "./BlogFaqAccordion";
import DeveloperNotesSection from "./DeveloperNotesSection";

export default function EnterpriseRagBlogDetail({ blog }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const searchComparisonRows = [
    {
      method: "Keyword (BM25)",
      strong: "Part numbers, codes, product names and proper nouns",
      weak: "Paraphrases and questions that use different words than the document"
    },
    {
      method: "Vector (semantic)",
      strong: "Meaning, paraphrase and natural-language questions",
      weak: "Exact identifiers and rare terms"
    },
    {
      method: "Hybrid",
      strong: "Both kinds of query in one pipeline",
      weak: "More components to tune and operate"
    }
  ];

  return (
    <article className="relative min-h-screen bg-[#f8fafc] text-[#050849] pt-28 pb-20 selection:bg-blue-600 selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[450px] w-[800px] bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#050849]/60 mb-5">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <ChevronRight size={12} />
          <span className="text-blue-700">Enterprise RAG</span>
        </nav>

        {/* HEADER BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs">
            <Shield size={12} />
            Web Content | SEO + GEO Optimised (Blog)
          </span>
          <span className="inline-flex items-center rounded-full bg-[#050849] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
            BLOG | ENTERPRISE RAG
          </span>
        </div>

        {/* TITLE */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-[#050849] leading-tight sm:leading-snug">
          Building Enterprise RAG Systems That Are Secure, Grounded and Production-Ready
        </h1>

        {/* META BAR */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-slate-200/80 py-3 text-xs text-[#050849]/70">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#050849]">WeRoute AI Engineering Practice</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={13} className="text-blue-600" />
              <span>{blog?.date || "Oct 22, 2026"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={13} className="text-blue-600" />
              <span>{blog?.readTime || "8 min read"}</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-[#050849] shadow-2xs hover:bg-slate-50 cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={13} />
                <span>Share Guide</span>
              </>
            )}
          </button>
        </div>

        {/* EXECUTIVE INTRO */}
        <div className="mt-6 space-y-3.5 text-base sm:text-[17px] leading-relaxed text-[#050849]/85 font-normal">
          <p>
            The RAG demo always works. The production system fails on three things: retrieval quality, permission leakage and documents that nobody cleaned. Those three problems take most of the real engineering effort.
          </p>
          <p>
            Retrieval augmented generation (RAG) lets a language model answer from your own documents. Lewis and colleagues described it in 2020 as a generator paired with a retriever over an external index. Every answer can then point to a source.
          </p>
          <p>
            This guide covers enterprise RAG from demo to production. It explains why retrieval quality decides the outcome, what document ingestion involves, how to secure and ground a RAG system, and how to evaluate it.
          </p>
          <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 text-sm text-[#050849]">
            WeRoute is an enterprise technology services company and Cisco partner. Its AI engineering work covers RAG, document processing and production deployment for enterprises.
          </div>
        </div>

        {/* AT A GLANCE */}
        <div className="my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
              <Award size={15} />
              AT A GLANCE
            </span>
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              Architectural Standard
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="font-bold text-[#050849]/60 block text-[11px] uppercase">Topic:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Enterprise RAG: retrieval, ingestion, security and evaluation
              </p>
            </div>
            <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-200/80">
              <span className="font-bold text-blue-800/80 block text-[11px] uppercase">Core claim:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Retrieval quality decides answer quality
              </p>
            </div>
            <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/80">
              <span className="font-bold text-amber-800/80 block text-[11px] uppercase">Hard requirements:</span>
              <p className="mt-1 font-semibold text-[#050849] leading-snug">
                Permission-aware retrieval, citations and visible abstention
              </p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-800/80 block text-[11px] uppercase">Before launch:</span>
              <p className="mt-1 font-bold text-emerald-800 leading-snug">
                An evaluation set that scores retrieval and generation separately
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: Why does the RAG demo work and the production system fail? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why does the RAG demo work and the production system fail?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: retrieval augmented generation, enterprise rag)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            A demo runs on a few clean documents and questions the builder already knows. Production runs on a decade of inconsistent files and questions nobody anticipated.
          </p>

          <p className="mt-3 font-semibold text-sm text-[#050849]">The failure chain is short.</p>

          <ol className="mt-3 space-y-2.5 pl-2 text-[15px] sm:text-[16px] text-[#050849]/90">
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                1
              </span>
              <span><strong>Retrieval returns the wrong passage.</strong> The right passage was never indexed, or ranked too low.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                2
              </span>
              <span><strong>The model answers confidently from it.</strong> The model has no way to know the passage is wrong.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 mt-0.5">
                3
              </span>
              <span><strong>No one can tell.</strong> Without citations or logs, the error looks like a correct answer.</span>
            </li>
          </ol>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            This changes the goal. A RAG system should answer accurately when it can and abstain visibly when it cannot. Answering every question rewards confident errors.
          </p>

          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A production RAG architecture has five stages, and each stage carries its own controls.
          </p>

          {/* Diagram 1: RAG Architecture */}
          <RagArchitectureDiagram />
        </section>

        {/* SECTION 2: Why is retrieval quality the whole system? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            Why is retrieval quality the whole system?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: rag architecture, rag chunking strategies, hybrid search rag, rag re-ranking)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            The model can only answer from what retrieval hands it. A better model does little when the right passage is missing.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How should you chunk documents?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Naive fixed-size splitting cuts text at an arbitrary character count. A table row, a clause or a procedure step can end up split across two chunks. Neither chunk then carries the full meaning.
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Structure-aware chunking splits at headings, sections and paragraphs instead. Several RAG chunking strategies exist, and the choice depends on the content.
          </p>
          <ul className="mt-3 space-y-2 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Fixed size with overlap.</strong> Simple and predictable. Microsoft&apos;s guidance suggests 512 tokens with 25 percent overlap as a starting point, and says to tune from there.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Structure-based.</strong> Split by headings or document sections. It keeps related content together.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span><strong>Enriched chunks.</strong> Add the document title and section path to each chunk, so mid-document chunks keep their context.</span>
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How do embedding models handle domain vocabulary?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A general embedding model learns general language. Internal terms, abbreviations and part codes are rare in its training data, so their vectors are weak. Test candidate models on real queries from your domain before committing. Vectors from two models are not comparable, so a model change means rebuilding the index.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Why does hybrid search beat pure vector search?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Vector search matches meaning. It does poorly on exact strings such as part numbers, error codes and proper nouns. A query for part number 4471-B has no meaning to capture. Only the exact characters matter.
          </p>

          {/* Search Method Comparison Table */}
          <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#050849] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Method</th>
                    <th className="p-3.5 font-bold">Strong at</th>
                    <th className="p-3.5 font-bold">Weak at</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-[#050849]/85">
                  {searchComparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3.5 font-bold text-[#050849]">{row.method}</td>
                      <td className="p-3.5 text-emerald-800 font-medium">{row.strong}</td>
                      <td className="p-3.5 text-[#050849]/70">{row.weak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#050849]/85">
            Hybrid search RAG runs keyword and vector queries together and merges the results. Reciprocal Rank Fusion is the common merge method. It scores each result as 1 divided by (rank plus a constant), commonly 60, and sums the scores across lists. It uses ranks because the two score scales cannot be compared. A passage that ranks well in both lists rises.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-[#050849]/85">
            The BEIR benchmark paper supports this design. It found BM25 remains a strong baseline, and that dense models often underperform it on new domains.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What does re-ranking add?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A re-ranker takes the top candidates from retrieval and scores each against the query again. It is slower and more accurate than the first stage, so it runs on a short list only. Azure&apos;s semantic ranker, for example, re-ranks the top 50 results and cannot recover a passage outside that set.
          </p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            This creates a trade-off between recall and precision.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Wider retrieval:</strong> More candidates raise recall and add re-ranking cost.</li>
            <li>• <strong>Fewer passages in the prompt:</strong> Fewer passages raise precision. Research on long contexts finds models use the start and end of the context better than the middle.</li>
          </ul>
          <p className="mt-2 font-medium text-sm text-blue-900">
            RAG re-ranking earns its cost only when first-stage recall is high, so measure recall first.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Why is metadata filtering both a relevance and a security control?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Metadata attaches facts to each chunk, such as document type, version and allowed groups. A filter on those fields narrows retrieval before ranking starts.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Relevance:</strong> A question about the 2024 policy should search only 2024 documents.</li>
            <li>• <strong>Security:</strong> A user should only retrieve chunks they may read.</li>
          </ul>
        </section>

        {/* SECTION 3: What does document ingestion involve? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            What does document ingestion involve?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: document ingestion, ocr for documents)
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85 font-medium">
            Document ingestion is the unglamorous majority of the work. Its quality sets the ceiling for everything after it.
          </p>

          {/* Diagram 2: Ingestion Pipeline */}
          <DocumentIngestionPipelineDiagram />

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How do you handle scans, tables and drawings?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Scanned files need OCR for documents, and layout extraction on top of it. Plain text extraction loses reading order, headings and structure. Document intelligence services such as Azure Document Intelligence return paragraphs, headings, tables and figures with confidence scores. Custom parsing gives more control on unusual formats and costs more to maintain.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-[#050849]/85">
            Tables defeat most naive pipelines. Flattened into text, a table loses the link between a value and its row and column headers. Tables often carry the most business meaning, such as prices and specifications.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Keep structure:</strong> Store a table as structured data, or as HTML, so merged cells and multi-row headers survive.</li>
            <li>• <strong>Repeat headers:</strong> Add column headers to every row that becomes a chunk.</li>
            <li>• <strong>Handle page breaks:</strong> A table that spans pages needs post-processing.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What happens when a source document is superseded?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A new revision arrives and the old one stays in the index. The system may cite either.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Version every chunk:</strong> Store a document ID, version and effective date as metadata.</li>
            <li>• <strong>Retire on replace:</strong> Remove or flag the old version when the new one arrives.</li>
            <li>• <strong>Re-ingest on a schedule:</strong> Check sources for changes and update the index. Permission changes need the same schedule.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What did WeRoute&apos;s catalog ingestion look like?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            WeRoute built a quotation automation system on catalog and technical documents. The pipeline pattern was consistent.
          </p>
          <ol className="mt-3 space-y-2 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">1. Collect.</span>
              <span>Gather catalogs, datasheets and drawings from their sources.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">2. Extract.</span>
              <span>Run OCR and layout extraction, and keep tables structured.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">3. Enrich.</span>
              <span>Attach product, version and part-code metadata to each chunk.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-blue-700">4. Index.</span>
              <span>Store text and metadata for hybrid retrieval, so exact part numbers match.</span>
            </li>
          </ol>
          <p className="mt-2 font-medium text-sm text-blue-900">
            Part codes drove the choice of hybrid retrieval, because exact identifiers must match exactly.
          </p>
        </section>

        {/* SECTION 4: How do you make RAG secure and grounded? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How do you make RAG secure and grounded?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: rag security, permission-aware rag)
          </div>

          <h3 className="mt-5 text-lg font-bold text-[#050849]">
            Why must retrieval respect user permissions?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            RAG security starts with one rule. Permission-aware RAG is the first requirement. If the retriever ignores a user&apos;s access rights, RAG becomes a data-exfiltration channel. It bypasses every existing control. A junior employee can ask a question and receive a paragraph from a board document, with no access check anywhere.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-[#050849]/85">
            OWASP&apos;s 2025 Top 10 for LLM Applications names this risk as LLM08, Vector and Embedding Weaknesses. It describes context leakage between users in shared vector stores. Its mitigations include permission-aware vector stores and strict data partitioning.
          </p>

          {/* Diagram 3: Permission-Aware RAG Flow */}
          <PermissionAwareRagDiagram />

          <ul className="mt-4 space-y-2 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Index permissions with the content:</strong> Copy access control lists into each chunk&apos;s metadata at ingestion.</li>
            <li>• <strong>Filter inside the query:</strong> Pass the user&apos;s groups as a filter, so unauthorized chunks are never retrieved.</li>
            <li>• <strong>Resolve identity on the server:</strong> Never trust a group list sent by the client.</li>
            <li>• <strong>Plan for sync lag:</strong> A permission change at the source applies only after the next index update.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What belongs in tenant and data isolation?
          </h3>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Logical separation:</strong> Keep each tenant&apos;s data in separate indexes or strictly filtered partitions.</li>
            <li>• <strong>Data egress:</strong> Decide which data may reach an external model API, and which must stay in your own environment.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How do citations and abstention work?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Every answer should trace to a source passage. An answer without a citation cannot be checked, so it cannot be used in a commercial decision.
          </p>
          <ul className="mt-2 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Cite the passage:</strong> Return the document, version and location with each claim.</li>
            <li>• <strong>Score confidence:</strong> Use retrieval scores and a check that the answer is supported by the cited text.</li>
            <li>• <strong>Abstain visibly:</strong> Below the threshold, the system states that it does not have enough information. It does not guess.</li>
          </ul>
          <p className="mt-3 text-sm text-[#050849]/80 italic">
            Tune the threshold on your evaluation set. Too low gives confident errors. Too high gives refusals that users stop trusting.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What should audit logs capture?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Log the query, the user, the retrieved passages and the generated output. OWASP recommends detailed, immutable logs of retrieval activity. They answer the incident review question: who saw what.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Which data protection duties apply?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Data protection law places duties on systems that process personal data. Typical duties include a defined purpose, security safeguards, breach notification and erasure. An index that holds personal data must support deletion.
          </p>
        </section>

        {/* SECTION 5: How do you evaluate and operate RAG in production? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How do you evaluate and operate RAG in production?
          </h2>
          <div className="mt-1 text-xs text-blue-700/80 font-medium">
            (Target: rag evaluation)
          </div>

          <h3 className="mt-5 text-lg font-bold text-[#050849]">
            What does a RAG evaluation set contain?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Build the evaluation set before launch. Microsoft&apos;s RAG guidance recommends representative test documents and mixed query types.
          </p>
          <ul className="mt-2.5 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Real questions:</strong> Collect them from future users.</li>
            <li>• <strong>Synthetic questions:</strong> Generate extra cases for coverage.</li>
            <li>• <strong>Out-of-corpus questions:</strong> Questions the documents cannot answer test abstention.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Why measure retrieval and generation separately?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Retrieval and generation fail for different reasons. Evaluate them apart to know which one to fix.
          </p>
          <ul className="mt-2.5 space-y-1.5 pl-2 text-sm sm:text-[15px] text-[#050849]/90">
            <li>• <strong>Retrieval metrics:</strong> Context precision and context recall show whether the right passages were found.</li>
            <li>• <strong>Generation metrics:</strong> Faithfulness and response relevancy show whether the answer follows the passages and addresses the question.</li>
          </ul>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            Why plan human review as a design phase?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Human review during the first weeks is a design step. Reviewers label failures, and those labels improve the evaluation set.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            How do you monitor retrieval degradation?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            A corpus grows and drifts. Re-run the evaluation set on a schedule and watch retrieval metrics, abstention rate and user feedback.
          </p>

          <h3 className="mt-6 text-lg font-bold text-[#050849]">
            What do re-ranking and large context windows cost?
          </h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#050849]/85">
            Both add latency and cost. Re-ranking adds a model call for every candidate. A larger context window adds tokens to every request. Set a cost and latency budget per query for each stage.
          </p>
        </section>

        {/* SECTION 6: How does WeRoute help? */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849]">
            How does WeRoute help?
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-[#050849]/85">
            WeRoute designs and delivers production RAG systems, from document ingestion and hybrid retrieval to access control and evaluation. Our{" "}
            <Link href="/services/enterprise-ai-machine-learning-development-services" className="font-bold text-blue-700 underline hover:text-blue-900">
              Enterprise AI & Machine Learning Development Services
            </Link>{" "}
            page describes the approach. Model Deployment & MLOps Services covers operation after launch.
          </p>

          <div className="mt-5 rounded-xl bg-[#050849] p-4 text-white flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold">
              WeRoute has delivered 40+ enterprise deployments with 99.9% system reliability.
            </span>
            <Award size={22} className="text-blue-300 shrink-0 ml-3" />
          </div>
        </section>

        {/* SECTION 7: Frequently Asked Questions */}
        <section className="mt-12 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#050849] mb-4">
            Frequently asked questions
          </h2>
          <BlogFaqAccordion faqs={blog?.faqs} />
        </section>

        {/* SECTION 8: CTA */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-[#050849] p-6 sm:p-8 text-white shadow-xl relative">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Plan Your Enterprise RAG System
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Talk to WeRoute&apos;s AI team about taking your RAG system to production.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B7F36B] px-5 py-3 text-xs font-bold text-[#080357] shadow-md transition-all hover:bg-white cursor-pointer"
              >
                <span>Talk to Our AI Team</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICES & READING */}
        <section className="mt-12 border-t border-slate-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED SERVICES
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services/enterprise-ai-machine-learning-development-services" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Enterprise AI & Machine Learning Development Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-and-devops-implementation" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Model Deployment & MLOps Services</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/cybersecurity" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Cybersecurity Solutions</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#050849]/60">
              RELATED READING
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/blogs/terraform-and-ansible-enterprise-infrastructure" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Terraform and Ansible: Building Repeatable Enterprise Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs/network-monitoring-vs-network-observability" className="font-semibold text-blue-700 hover:underline flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>Network Monitoring vs Network Observability: What Enterprises Actually Need</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 10: DEVELOPER NOTES */}
        <DeveloperNotesSection notes={blog?.developerNotes} />

      </div>
    </article>
  );
}
