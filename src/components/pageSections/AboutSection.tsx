import classNames from 'classnames'
import Image from 'next/image'
import { Fragment } from 'react'
import { staticInfo } from '../../utils/staticInfo'
import { getHtmlTagWrapperStyle } from '../function/getHtmlTagWrapperStyle'
import Text from '../ui/typography/Text'

function AboutSection({ className, ...restProps }: GlobalProps) {
  return (
    <section
      className={classNames('flex', 'w-full h-fit', 'px-30 py-90', className)}
      {...restProps}
    >
      <div className="flex flex-col pl-12">
        <Text
          as="h2"
          hasWordHoverEffect
          className={classNames(
            'text-7xl text-primary font-bold mb-16',
            getHtmlTagWrapperStyle('h2')
          )}
        >
          About me
        </Text>
        <div className="grid grid-cols-12 gap-8">
          <div className="flex flex-col space-y-16 col-span-6">
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
          <div className="col-span-6">
            <div className="border-1 border-primary rounded-lg p-3">
              <div className="flex flex-wrap -ml-3 -mt-3">
                {staticInfo.skills.map((skill, index) => (
                  <Fragment key={index + 'skill'}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="ml-3 mt-3"
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
