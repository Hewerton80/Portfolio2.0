import classNames from 'classnames'
import { staticInfo } from '../../utils/staticInfo'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import PortfolioCard from '../ui/layout/PortfolioCard'
import Text from '../ui/typography/Text'

interface MyPortfolioSectionProps extends GlobalProps {}

function MyPortfolioSection({ className, ...restProps }: MyPortfolioSectionProps) {
  return (
    <section
      className={classNames('flex flex-col', 'w-full h-fit', 'py-22.5', className)}
      {...restProps}
    >
      <div className="flex flex-col pl-[78px] pr-7.5">
        <Text
          as="h2"
          className={classNames(
            'text-7xl text-primary font-bold mb-16',
            getHtmlTagWrapperStyle('h2')
          )}
        >
          My Portfolio
        </Text>
        <Text as="p" className={classNames('mb-20', getHtmlTagWrapperStyle('p'))}>
          {staticInfo.portifolioDescription}
        </Text>
      </div>
      <div className="flex-1 w-full grid grid-cols-4 gap-[1px]">
        {staticInfo.portfolio
          .map((portifolio, index) => (
            <PortfolioCard key={portifolio.title + index} portifolio={portifolio} />
          ))
          .filter((_, index) => index === 0)}
      </div>
    </section>
  )
}

export default MyPortfolioSection
