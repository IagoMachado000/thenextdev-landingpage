import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/social-icons';
import { SVGProps } from 'react';

type SocialLinkProps = LinkProps & {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
};

export function SocialLink({ icon: Icon, className, ...props }: SocialLinkProps) {
  return (
    <Link className={`group -m-1 p-1 ${className ?? ""}`} {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

export function AboutSection() {
  return (
    <section
      id='about'
      className='container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24 mx-auto'
    >
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]'>
        <div className='lg:pl-20 flex justify-center'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src='/avatar.webp'
              alt='Iago Machado'
              width={800}
              height={800}
              quality='95'
              priority={true}
              className='aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2 text-center md:text-start'>
          <h1 className='font-heading text-3xl md:text-4xl lg:text-5xl'>
            @iago.machado
          </h1>
          <p className='mt-6 text-base text-muted-foreground'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className='mt-6 flex justify-center md:justify-start gap-6'>
            <SocialLink
              href='#'
              icon={InstagramIcon}
            />
            <SocialLink
              href='#'
              icon={GitHubIcon}
            />
            <SocialLink
              href='#'
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}