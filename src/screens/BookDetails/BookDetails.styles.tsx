import styled from 'styled-components'

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px 10px;
    margin: 20px 15px;
`

const PictureContainer = styled.div`
    flex: 1;
    padding: 10px 15px;
    margin: 15px 25px;
    width: 400px;
    height: 350px;
`

const DescriptionContainer = styled.div`
    flex: 1;
    padding: 10px 15px;
    margin: 15px 25px;
    width: 400px;
    height: 350px;
`

const AddToCartButton = styled.button`
`

const ChangePictureButton = styled.button`
`

export {
  DetailsContainer,
  PictureContainer,
  DescriptionContainer,
  AddToCartButton,
  ChangePictureButton
}
