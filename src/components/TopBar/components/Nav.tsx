import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const tvl = Math.floor(Math.random() * 109375) + 98600;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledAbsoluteLink href="https://nft.cheeseswap.app/create" target="_blank" rel="noopener noreferrer">
        NFT ArtRoom
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://cheeseswap.app"
        target="_blank"
        rel="noopener noreferrer"
      >
      CheeseSwap
      </StyledAbsoluteLink>

      <StyledAbsoluteLink
        href="https://nft.cheeseswap.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        NFT (Beta)
      </StyledAbsoluteLink>
    <Title>
   <b>  POOL TVL: {tvl}&nbsp;$ </b>
    </Title>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 400px) {
    padding: ${(props) => props.theme.spacing[2]}px;
    justify-content: center;
  }
`
const Title = styled.div`
  align-items: center;
  display: flex;
  max-width: 25%;
  height: 30px;
  background: #67234C;
  padding: ${(props) => props.theme.spacing[2]}px;
  margin: ${(props) => props.theme.spacing[2]}px;
  border-radius: 6px;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
    font-size: 12px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
    font-size: 14px;
  }
`

export default Nav
