import classNames from 'classnames'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'
import Button from '../ui/forms/Button'
import TiktokLogoReplica from '../ui/dataDisplay/TiktokLogoReplica'
function HomeSection({ className, ...restProps }: GlobalProps) {
  return (
    <section
      className={classNames(
        'flex items-center',
        'w-full min-h-screen',
        'px-30 py-90',
        className
      )}
      {...restProps}
    >
      <div className={classNames('flex flex-col', ' pl-12 space-y-16')}>
        <Text
          as="h1"
          className={classNames(
            'text-8xl font-bold',
            'slide-left',
            getHtmlTagWrapperStyle('h1')
          )}
        >
          <Text as="span" hasWordHoverEffect>
            Hy,
          </Text>
          <br />
          <Text as="span" hasWordHoverEffect>
            {"I'm "}
          </Text>
          <TiktokLogoReplica char="H" />
          <Text as="span" hasWordHoverEffect>
            ewerton,
          </Text>
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
        <Button>Contact-me</Button>
      </div>
    </section>
  )
}

export default HomeSection