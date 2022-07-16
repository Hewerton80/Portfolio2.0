import classNames from 'classnames'
import Image from 'next/image'
import { Fragment, useContext, useEffect, useRef } from 'react'
import { ActiveUrlContext } from '../../contexts/ActiveUrlContext'
import { IDS_SECTIONS } from '../../utils/idsSections'
import { staticInfo } from '../../utils/staticInfo'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'

function AboutSection({ className, ...restProps }: GlobalProps) {
  const { setActiveUrl } = useContext(ActiveUrlContext)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setActiveUrl(IDS_SECTIONS.ABOUT)
        }
      })
    }, {})
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [setActiveUrl])
  return (
    <section
      id={IDS_SECTIONS.ABOUT}
      // className={classNames('flex', 'w-full h-fit', 'px-7.5 py-22.5', className)}
      ref={sectionRef}
      {...restProps}
    >
      <div className="flex flex-col pl-12">
        <Text
          as="h2"
          hasWordHoverEffect
          className={classNames('title-section', getHtmlTagWrapperStyle('h2'))}
        >
          About me
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-16 ">
            <Text as="p" className={classNames(getHtmlTagWrapperStyle('p'))}>
              {staticInfo.aboutMe.map((paragraph, index) => (
                <Text as="span" key={index + 'about'}>
                  {paragraph}
                  <br />
                  <br />
                </Text>
              ))}
            </Text>
          </div>
          <div>
            <div className="border-1 border-primary rounded-lg p-3">
              <div className="flex flex-wrap -ml-3 -mt-3">
                {staticInfo.skills.map((skill, index) => (
                  <Fragment key={index + 'skill'}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="ml-3 mt-3 h-5 md:h-7"
                      src={skill.urlBadge}
                      alt={skill.name}
                      loading="lazy"
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
