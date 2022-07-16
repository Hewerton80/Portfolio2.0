import classNames from 'classnames'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'
import Button from '../ui/forms/Button'
import TiktokLogoReplica from '../ui/dataDisplay/TiktokLogoReplica'
import Link from 'next/link'
import { IDS_SECTIONS } from '../../utils/idsSections'

function HomeSection({ className, ...restProps }: GlobalProps) {
  return (
    <section
      className={classNames('min-h-screen', 'px-7.5 py-22.5', className)}
      {...restProps}
    >
      <div className={classNames('flex flex-col', 'pl-12 space-y-16')}>
        <Text
          as="h1"
          className={classNames(
            'text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold',
            'slide-left',
            getHtmlTagWrapperStyle('h1')
          )}
        >
          <Text as="span" hasWordHoverEffect>
            Hi,
          </Text>
          <br />
          <Text as="span" hasWordHoverEffect>
            I&apos;m{' '}
          </Text>
          <span>
            <TiktokLogoReplica char="H" />
            <Text as="span" hasWordHoverEffect>
              ewerton,
            </Text>
          </span>
          <br />
          <Text as="span" hasWordHoverEffect>
            web developer
          </Text>
        </Text>
        <Text
          as="p"
          className={classNames(
            'text-gray-600 tracking-[0.25rem]',
            'slide-left',
            getHtmlTagWrapperStyle('p')
          )}
        >
          Front End Developer / Full stack
        </Text>
        <Link href={`#${IDS_SECTIONS.CONTACT}`}>
          <a>
            <Button>contacts</Button>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default HomeSection
