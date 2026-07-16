// High-impact inline client pull-quote for case study copy. Takes the same
// shape as `caseStudy.testimonial`, so it drops into MDX as
// `<PullQuote {...caseStudy.testimonial} />`.
export function PullQuote({
  author,
  content,
  className,
}: {
  author: { name: string; role: string }
  content: string
  className?: string
}) {
  return (
    <figure className={className}>
      <blockquote className="font-display text-2xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl">
        <p className="before:content-['“'] after:content-['”']">{content}</p>
      </blockquote>
      <figcaption className="mt-6 text-base text-neutral-600">
        <span className="font-semibold text-neutral-950">{author.name}</span>,{' '}
        {author.role}
      </figcaption>
    </figure>
  )
}
