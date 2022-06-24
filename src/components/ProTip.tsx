import type { FC } from 'react'
import { adsenseLink, jumpToAdsense } from '~/utils/adsense'
import useDark from '~/hooks/useDark'

/**
 * 喜马拉雅链接
 * @param props
 * @returns
 */

const ProTip: FC = () => {
  const { toggleDark } = useDark()

  return (
    <div
      className="m-6 text-center flex justify-center items-center" style={{ color: '#666363' }}
    >
      <div className="i-ic:outline-emoji-objects text-xl cursor-pointer" style={{ color: '#f3a83b' }} onClick={toggleDark}></div>
      Tip: 为你的夏日带去清凉！
    </div>
  )
}

export default ProTip
