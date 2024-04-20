import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import remarkToc from 'remark-toc';
import remarkHtml from 'remark-html';

// MDX configuration
const withMDX = createMDX({
    extension: /\.mdx?$/, // This regex will handle both .md and .mdx files
    options: {
        remarkPlugins: [
            remarkGfm,
            remarkToc,
            remarkHtml,
        ],
        rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            rehypeHighlight,
        ],
        providerImportSource: '@mdx-js/react',
    },
});

// Next.js configuration
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// Export the configuration wrapped by withMDX
export default withMDX(nextConfig);