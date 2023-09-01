import rss from "@astrojs/rss";
import type { AstroConfig } from "astro";
import { getCollection } from "astro:content";
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

const parser = new MarkdownIt();

export default async function get( context: AstroConfig) {
    const blog = await getCollection("blog");

    return rss({
        title: "The AstroBooks Blog",
        description: "The story AstroBooks",
        site: context.site!, // without ! will throw The expected type comes from property 'site' which is declared here on type 'RSSOptions' error
        items: blog.map(post => {
            return {
                title: post.data.title,
                description: post.data.description,
                link: `/blog/${post.slug}`,
                content: sanitizeHtml(parser.render(post.body)),
                pubDate: post.data.date,
            }
        })
    });
}