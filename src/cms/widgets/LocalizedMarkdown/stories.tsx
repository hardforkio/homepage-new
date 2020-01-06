import React from 'react'
import '../../../scss/main.scss'
import { storiesOf } from '@storybook/react'

import cn from 'classnames'
import styles from '../styles.module.scss'

import { createLocalizedMarkdownControl } from './control'
import { Map, List } from 'immutable'

interface WrapperProps {
  Widget: any
}

const Wrapper: React.FC<WrapperProps> = ({ Widget }) => {
  const [value, setValue] = React.useState(undefined)

  return (
    <div>
      <div>In the widget I would see:</div>
      <div>
        <Widget
          classNameWrapper={cn(styles.netlify)}
          field={Map()}
          value={value}
          onChange={setValue}
          //onAddAsset={() => {}}
          //getAsset={() => {}}
          //editorControl={() => <div></div>}
          getEditorComponents={() => Map([])}
        />
      </div>
      <div>And in the file I would save:</div>
      <div> {JSON.stringify(value, null, 2)}</div>
    </div>
  )
}
storiesOf('Widgets.LocalizedMarkdown', module).add('default', () => (
  <Wrapper Widget={createLocalizedMarkdownControl(['de', 'en'])} />
))
