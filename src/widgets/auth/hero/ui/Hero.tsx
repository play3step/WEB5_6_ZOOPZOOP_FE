import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <h1 className="sr-only">로그인 페이지</h1>
      <div className="flex-center flex-col gap-2">
        <Image
          src={'/logoWithTitle.webp'}
          alt="ZOOPZOOP logo"
          width={300}
          height={200}
        />
        <span className="text-xl font-bold">
          마음에 드는 페이지, 놓치지 말고 줍줍하세요!
        </span>
      </div>
    </>
  )
}
export default Hero
