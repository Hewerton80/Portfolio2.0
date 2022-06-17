import classNames from 'classnames'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'
import Button from '../ui/forms/Button'
function HomeSection({ className, ...restProps }: GlobalProps) {
  return (
    <section
      className={classNames('flex', 'w-full h-fit', 'px-30 py-90', className)}
      {...restProps}
    >
      <div className="flex flex-col pl-12">
        <Text
          as="h1"
          className={classNames(
            'text-8xl font-bold',
            'mb-16',
            getHtmlTagWrapperStyle('h1')
          )}
        >
          <Text as="span" hasWordHoverEffect>
            Hy,
          </Text>
          <br />
          <Text as="span" hasWordHoverEffect>
            {"I'am Hewerton,"}
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
            'mb-16',
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
