import classNames from 'classnames'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'

interface MyPortfolioSectionProps extends GlobalProps {}

function MyPortfolioSection({ className, ...restProps }: MyPortfolioSectionProps) {
  return (
    <section
      className={classNames('flex', 'w-full h-fit', 'px-30 py-90', className)}
      {...restProps}
    >
      <div className="flex flex-col pl-12">
        <Text
          as="h2"
          className={classNames(
            'text-7xl text-primary font-bold mb-16',
            getHtmlTagWrapperStyle('h2')
          )}
        >
          My Portfolio
        </Text>
      </div>
    </section>
  )
}

export default MyPortfolioSection
