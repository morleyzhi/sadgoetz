import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Card from 'components/Card'

import imageBgTile from 'files/bg-tile.jpg'
import imageGuy from 'files/guy.png'

const LINES = [
  <Fragment>My armor is real heavy, like my heart</Fragment>,
  <Fragment>
    I never get the Tanooki Suit in <em>Super Mario</em>
  </Fragment>,
  <Fragment>My mustache is longer than my beard</Fragment>,
  <Fragment>Yesterday in the barracks I losed my pet hamster</Fragment>,
  <Fragment>The girl I like is moving to Grevesmühlen</Fragment>,
  <Fragment>I wish this lollipop hadn’t stuck to my beard</Fragment>,
  <Fragment>Everyone went off to the Crusade without me</Fragment>,
  <Fragment>All I want to do is lay in the bathtub and cry</Fragment>,
  <Fragment>I don’t know why the peasants are revolting</Fragment>,
  <Fragment>
    The ending of <em>Free Willy</em> made me sad
  </Fragment>,
  <Fragment>Mommy married the Duke of Württemberg</Fragment>,
  <Fragment>I wish they didn't have to amputate my left hand</Fragment>,
  <Fragment>The line for the bathroom is too long</Fragment>,
  <Fragment>What will I do when Oprah goes off the air</Fragment>,
  <Fragment>
    I lent my copy of <em>Twilight</em> and now I want it back
  </Fragment>,
  <Fragment>Avatar was scary and I sawed it alone</Fragment>,
  <Fragment>My shiny penny fell down the drain</Fragment>,
  <Fragment>When my helmet’s down I cat’t see good</Fragment>,
  <Fragment>I got a pimple and tonight’s the big dance</Fragment>,
  <Fragment>I remembered my dead puppy today</Fragment>,
]

const FOOTER_HEIGHT = 50

const El = styled.div`
  color: #2f2925;
`

const Body = styled.div`
  min-height: 66vh;

  display: flex;
  align-items: flex-end;
  background-image: url('${imageBgTile}');
  background-position: top left;
  background-repeat: repeat;

  padding-top: 50px;

  display: flex;
  align-items: flex-end;
`

const Guy = styled.div`
  background-image: url('${imageGuy}');
  width: 365px;
  height: 487px;
  margin-right: 30px;
`

const Footer = styled.div`
  height: ${FOOTER_HEIGHT}px;
  display: flx;
  align-items: center;

  text-transform: uppercase;
  border-top: 4px double #2f2925;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

export default class App extends Component {
  state = {
    lineIndex: Math.floor(Math.random() * LINES.length),
  }
  render() {
    return (
      <El>
        <Body>
          <Guy />
          <Card
            onClick={() =>
              this.setState({
                lineIndex:
                  this.state.lineIndex === LINES.length - 1
                    ? 0
                    : this.state.lineIndex + 1,
              })
            }
          >
            {LINES[this.state.lineIndex]}
          </Card>
        </Body>
        <Footer>
          © <FooterLink href="https://mo.rley.co">Morley Zhi</FooterLink>
        </Footer>
      </El>
    )
  }
}
