import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from './firebase'

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection('movies').doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No such document in firebase");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <Gradient>
      </Gradient>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>
      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt=""/>
            <span>Play</span>
          </Player>
          <Trailer>
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <img src="/images/addlist-icon.svg" alt=""/>
          </AddList>
        </Controls>
        <SubTitle>
          {detailData.subTitle}
        </SubTitle>
        <Description>
          {detailData.description}
        </Description>
      </ContentMeta>
    </Container>
    
  );
};
const Container = styled.div`
  position: relative; 
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  margin-top: 50px;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Gradient = styled.div`
  position: fixed;
  background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));
  inset: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: -1;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -2;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;


const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  font-weight: bold;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
    transition: all .2s ease-in-out;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: #00000099;
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background: rgb(249, 249, 249);
    color: rgb(0, 0, 0);
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  img {
    width: 1rem;
    display: inline-block;
  }

  &:hover {
    transition: all .2s ease-in-out;
    background: rgb(249, 249, 249);
    color: rgb(0, 0, 0);

    img {
      filter: invert(1)
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;