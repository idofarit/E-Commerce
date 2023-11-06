import React from "react";
import styled, { keyframes } from "styled-components";

const ScrollAnimate = () => {
  const row = [
    "https://w7.pngwing.com/pngs/488/478/png-transparent-adidas-originals-t-shirt-logo-brand-adidas-angle-text-retail-thumbnail.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQA1qRuEfU---SwqXiI_ie1nhsSuB-ZKhjgw&usqp=CAU",
    "https://e7.pngegg.com/pngimages/269/82/png-clipart-logo-levi-strauss-co-brand-jeans-jeans-text-label-thumbnail.png",
    "https://w7.pngwing.com/pngs/100/126/png-transparent-puma-logo-thumbnail.png",
    "https://hindubabynames.info/wp-content/themes/hbn_download/download/clothing-and-accessories-companies/allen-solly-logo.png",
    "https://w7.pngwing.com/pngs/224/991/png-transparent-tommy-hilfiger-brand-tommy-hilfiger-fashion-pvh-logo-clothing-tommy-hilfiger-logo-blue-angle-text.png",
    "https://e7.pngegg.com/pngimages/43/204/png-clipart-logo-h-m-brand-clothing-logo-hm.png",
    "https://cdn2.desidime.com/topics/photos/1215666/original/Peter-England-Logo-Png-Free-Download.png?1603865919",
    "https://e7.pngegg.com/pngimages/796/670/png-clipart-brand-raymond-group-logo-textile-clothing-raymond-angle-text-thumbnail.png",
  ];

  return (
    // <AppContainer>
    <Wrapper>
      <div className="section-center">
        <Text>Brands that you prefer</Text>
        {/* <Note>Our cutsomers have gotten offers from awesome companies</Note> */}
        <Marquee>
          <MarqueeGroup>
            {row.map((item, index) => (
              <ImageGroup key={index}>
                <Image src={item} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row.map((item, index) => (
              <ImageGroup key={index}>
                <Image src={item} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </div>
    </Wrapper>
    // </AppContainer>
  );
};

export default ScrollAnimate;

const Wrapper = styled.div`
  /* width: auto; */
  height: fit-content;
  padding-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -8rem;
  margin-bottom: 2rem;
  background: linear-gradient(
      38.73deg,
      rgba(7, 62, 87, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(44, 215, 234, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 98%, 0 100%);

  @media screen and (max-width: 750px) {
    margin-top: -5rem;
  }
  @media screen and (max-width: 850px) {
    margin-top: -8rem;
  }
  @media screen and (max-width: 650px) {
    margin-top: -14rem;
  }
  @media screen and (max-width: 420px) {
    margin-top: -17rem;
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  margin-bottom: 1.2rem;
  color: #02203c;
  margin: auto;
  display: flex;
  letter-spacing: 0.15rem;

  justify-content: center;
`;

const Marquee = styled.div`
  display: flex;
  /* width: 1200px; */
  /* width: 600px; */
  overflow: hidden;
  user-select: none;

  /* -webkit-mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  ); */
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
from{
  left: translateX(0);
}to{
  transform: translateX(-100%);
}
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 10s linear infinite;
  @media screen and (max-width: 800px) {
    width: 850px;
  }
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(20rem, 10rem + 1vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 50);
  /* width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10); */
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
