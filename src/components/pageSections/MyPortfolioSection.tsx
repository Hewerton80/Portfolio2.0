import classNames from 'classnames'
import { useContext, useEffect, useRef } from 'react'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import { IDS_SECTIONS } from '../../utils/idsSections'
import { staticInfo } from '../../utils/staticInfo'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import PortfolioCard from '../ui/layout/PortfolioCard'
import Text from '../ui/typography/Text'

interface MyPortfolioSectionProps extends GlobalProps {}

function MyPortfolioSection({ className, ...restProps }: MyPortfolioSectionProps) {
  const { setActiveUrl } = useContext(ActiveUrlContext)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      console.log(entries)
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setActiveUrl(IDS_SECTIONS.PORTFOLIO)
        }
        // console.log(entry.intersectionRatio > 0 ? 'visible' : 'invisible')
      })
    }, {})
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [setActiveUrl])

  return (
    <section
      id={IDS_SECTIONS.PORTFOLIO}
      className={classNames('flex flex-col', 'w-full h-fit', 'py-22.5', className)}
      ref={sectionRef}
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
          Portfolio
        </Text>
        <Text as="p" className={classNames('mb-20', getHtmlTagWrapperStyle('p'))}>
          {staticInfo.portifolioDescription}
        </Text>
      </div>
      <div className="flex-1 w-full grid grid-cols-4 gap-[1px]">
        {
          staticInfo.portfolio.map((portifolio, index) => (
            <PortfolioCard key={portifolio.title + index} portifolio={portifolio} />
          ))
          // .filter((_, index) => index === 0)
        }
      </div>
    </section>
  )
}

export default MyPortfolioSection
