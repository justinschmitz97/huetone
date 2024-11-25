import styled from 'styled-components'

export const Hotkeys = () => {
  const isWin = navigator.platform.toUpperCase().indexOf('WIN') >= 0
  const MetaKey = () => (isWin ? <Key>Ctrl</Key> : <Key>⌘</Key>)
  return (
    <Wrapper>
      <Section>
        <h3>Hotkeys</h3>
        <List role="list">
          <li>
            <Key>1</Key> - <Key>9</Key> — switch palette
          </li>
          <li>
            <Key>↑</Key> <Key>↓</Key> <Key>→</Key> <Key>←</Key> — select another
            color
          </li>
          <li>
            <MetaKey /> + <Key>↑</Key> <Key>↓</Key> <Key>→</Key> <Key>←</Key> —
            move rows and columns
          </li>
          <li>
            <MetaKey /> + <Key>⇧</Key> + <Key>↑</Key> <Key>↓</Key> <Key>→</Key>{' '}
            <Key>←</Key> — duplicate rows and columns
          </li>
          <li>
            <Key>L</Key> + <Key>↑</Key> <Key>↓</Key> — change lightness of
            selected color
          </li>
          <li>
            <Key>C</Key> + <Key>↑</Key> <Key>↓</Key> — change chroma of selected
            color
          </li>
          <li>
            <Key>H</Key> + <Key>↑</Key> <Key>↓</Key> — change hue of selected
            color
          </li>
          <li>
            <MetaKey /> + <Key>C</Key> — copy selected color as hex.
          </li>
          <li>
            <MetaKey /> + <Key>⇧</Key> + <Key>C</Key> — copy selected color in{' '}
            <Code>lch()</Code> format. Note that it has limited{' '}
            <Link href="https://caniuse.com/css-lch-lab">browser support</Link>.
          </li>
          <li>
            <MetaKey /> + <Key>V</Key> — paste color. Just copy color in any
            format and paste it here.
          </li>
          <li>
            Hold <Key>B</Key> — preview palette in greys.
          </li>
        </List>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const Section = styled.section`
  font-size: 16px;
  margin-bottom: 24px;

  p {
    max-width: 60ch;
    margin-top: 12px;
  }
`

const List = styled.ul`
  padding-left: 0;
  & > li {
    margin-top: 12px;
  }
  & > li:first-child {
    margin-top: 0;
  }
`
const Key = styled.span`
  display: inline-block;
  padding: 0px 0px;
  text-align: center;
  min-width: 28px;
  border-radius: 4px;
  background-color: var(--c-btn-bg);
  border: 1px solid var(--c-divider);
`

const Link = styled.a`
  color: inherit;
  text-decoration-color: var(--c-text-secondary);
  :hover {
    color: var(--c-text-primary);
    text-decoration: none;
  }
`

const Code = styled.code`
  /* background-color: #eee; */
  border: 1px solid var(--c-divider);
  border-radius: var(--radius-m);
  font-family: courier, monospace;
  padding: 0 3px;
`
