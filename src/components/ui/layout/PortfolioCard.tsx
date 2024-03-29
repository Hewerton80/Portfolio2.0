/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import useTranslate from '../../../hooks/useTranslate'
import { Iportfolio } from '../../../utils/staticInfo'
import { Modal } from '../overlay/Modal'
import Text from '../typography/Text'

interface PortfolioCardProps extends GlobalProps {
  portifolio: Iportfolio
}

function PortfolioCard({ className, portifolio, ...restProps }: PortfolioCardProps) {
  const [openModal, setOpenModal] = useState(false)
  const { activedLocale } = useTranslate()

  const imgModalElement = (
    <img
      className={classNames('w-full border-y')}
      src={portifolio.imgs[0]}
      alt={portifolio.header[activedLocale].title}
      loading="lazy"
    />
  )
  return (
    <>
      <div
        className={classNames(
          'flex justify-center relative',
          portifolio.notLandscape ? 'items-start' : 'items-center',
          'aspect-square overflow-hidden',
          className
        )}
        {...restProps}
      >
        <img
          className={classNames('absolute left-0 top-0 z-10', 'w-full h-full', 'blur-sm')}
          src={portifolio.imgs[0]}
          alt={portifolio.header[activedLocale].title}
          loading="lazy"
        />
        <img
          className={classNames('w-full mx-auto object-cover z-20')}
          src={portifolio.imgs[0]}
          alt={portifolio.header[activedLocale].title}
          loading="lazy"
        />
        <div
          className={classNames(
            'absolute left-0 top-0 z-30',
            'w-full h-full',
            'cursor-pointer'
          )}
          style={{
            background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)',
          }}
          onClick={() => setOpenModal(true)}
        />
        <Text
          className={classNames('bottom-2 z-40', 'text-sm font-bold line-clamp-1')}
          style={{ position: 'absolute' }}
        >
          {portifolio.header[activedLocale].title}
        </Text>
      </div>
      <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)}>
        <Modal.Title> {portifolio.header[activedLocale].title}</Modal.Title>
        <Modal.Content className="space-y-4">
          <p className="text-sm">{portifolio.header[activedLocale].description}</p>
          {portifolio?.github && (
            <div className="flex space-x-2">
              <strong className="mb-2">GitHub: </strong>{' '}
              <Link
                href={portifolio?.github.link}
                passHref
                className="underline text-blue-400 line-clamp-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {portifolio?.github.title}
              </Link>
            </div>
          )}
          {portifolio?.link && (
            <div className="flex space-x-2">
              <strong className="mb-2">Acessar site: </strong>{' '}
              <Link
                href={portifolio.link}
                passHref
                className="underline text-blue-400 line-clamp-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {portifolio.link}
              </Link>
            </div>
          )}
          <div className="flex flex-col">
            <strong className="mb-2">Tecnologias usadas: </strong>
            <div className="flex flex-wrap -ml-2 -mt-2">
              {portifolio.techs.map((technology, index) => (
                <span
                  key={technology + index}
                  className={classNames(
                    'flex items-start justify-center',
                    'ml-2 mt-2',
                    'text-primary text-sm',
                    'border border-primary rounded-full px-2 py-1'
                  )}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-3/5 justify-center mx-auto">
            {portifolio?.link ? (
              <Link
                href={portifolio.link}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                {imgModalElement}
              </Link>
            ) : (
              imgModalElement
            )}
          </div>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default PortfolioCard
