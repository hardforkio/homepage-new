import CMS from 'netlify-cms-app'
import React from 'react'
import { fromJS, isImmutable, Map, List } from 'immutable'

import { getTranslation, uppendTranslation } from '../../i18n-lib'
import { Locale } from '../../i18n-locales'

const MarkdownControl = CMS.getWidget('markdown').control
console.log(CMS)

// netlify CMS markdown widget properties
export interface MarkdownWidgetProps {
  onChange: Function
  onAddAsset: Function
  getAsset: Function
  classNameWrapper: string
  editorControl: Function
  value?: string // defaults to empty string
  field: Map<any, any>
  getEditorComponents?: Function
}

// actual properties with updated value field
export interface LocalizedMarkdownWidgetProps {
  onChange: Function
  onAddAsset?: Function // not used at all
  getAsset?: Function // not used at all
  classNameWrapper?: string
  value?: List<Map<any, any>>
  field: Map<any, any> // according to docs should support 'default' (it doesn't) and 'buttons' (working)
  editorControl?: Function // JSX element used for plugins (needed when plugins enabled)
  getEditorComponents: Function // returns list of plugins
}

export const createLocalizedMarkdownControl = (locales: Locale[]) => {
  return class LocalizedMarkdownControl extends React.Component<
    LocalizedMarkdownWidgetProps
  > {
    getWidgetState = () => {
      console.log('props', this.props)
      console.log('field', this.props.field.toJS())
      const { value } = this.props
      return !value ? [] : isImmutable(value) ? value.toJS() : value
    }

    getValue = (locale: Locale) =>
      getTranslation<object>(locale)(this.getWidgetState())

    handleChange = (locale: Locale) => (newValue: any) => {
      this.props.onChange(
        uppendTranslation(locale, newValue)(this.getWidgetState()),
      )
    }

    updateProps = (locale: Locale) => ({
      ...this.props,
      key: locale,
      onChange: this.handleChange(locale),
      value: fromJS(this.getValue(locale)),
    })

    render = () => (
      <div>
        {locales.map(locale => (
          <MarkdownControl {...this.updateProps(locale)} />
        ))}
      </div>
    )
  }
}
