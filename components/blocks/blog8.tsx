import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface Blog8Props {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const TrabajosPage = ({
  heading = "Blog Postsaaa",
  description = "Dasdaser the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  posts = [],
}: Blog8Props) => {
  const { t } = useTranslation();
  return (
    <section className="mt-[39vh] pb-100 w-full">
      <div className="flex flex-col gap-16 px-[5%] sm:px-[5%] md:px-[11%] pb-20">
        <div className="">
          <h2 className=" mb-6 text-pretty text-5xl md:text-5xl lg:text-6xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="font-base ml-[0%] opacity-0 sm:ml-[39%] mt-[0px] sm:mt-[-140px] md:mt-[-105px] xl:mt-[-120px]">
            {description}
          </p>
        </div>

        <div className="grid sm:gap-y-12 md:gap-y-16 lg:gap-y-20 gap-y-10 ">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="font-base font-bold"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground md:mt-5">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">{post.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {post.published}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>{t("view_page")}</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={700}
                        height={394}
                        priority={false}
                        className="w-full transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TrabajosPage };
