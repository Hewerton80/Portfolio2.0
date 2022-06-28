/* eslint-disable @next/next/no-img-element */
import { Dialog } from '@headlessui/react'
import classNames from 'classnames'
import { useState } from 'react'
import { staticInfo } from '../../../utils/staticInfo'
import { Modal, ModalContent, ModalTitle } from '../overlay/Modal'
import Text from '../typography/Text'

interface PortfolioCardProps extends GlobalProps {
  portifolio: typeof staticInfo.portfolio[0]
}

function PortfolioCard({ className, portifolio, ...restProps }: PortfolioCardProps) {
  const [openModal, setOpenModal] = useState(false)
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
          alt={portifolio.title}
          loading="lazy"
        />
        <img
          className={classNames('w-full mx-auto object-cover z-20')}
          src={portifolio.imgs[0]}
          alt={portifolio.title}
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
          {portifolio.title}
        </Text>
      </div>
      {/* <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data will be
            permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setOpenModal(false)}>Deactivate</button>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog> */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalTitle> {portifolio.title}</ModalTitle>
        <ModalContent>teste</ModalContent>
      </Modal>
    </>
  )
}

export default PortfolioCard
