import CMS from 'netlify-cms-app'
import React, { Component } from 'react'
import { fromJS, isImmutable } from 'immutable'

import { WidgetProps } from '../mockNetlify'
import { getTranslation, uppendTranslation } from '../../i18n-lib'
import { Locale } from '../../i18n-locales'

const ObjectWidgetPreview = CMS.getWidget('object').preview

export const createLocalizedObjectPreview = (locales: Locale[]) => {
  return class LocalizedObjectPreview extends Component<WidgetProps> {
    getStateAsJS = () => {
      const { value } = this.props
      return !value ? [] : isImmutable(value) ? value.toJS() : value
    }

    getValue = (locale: Locale) =>
      getTranslation<object>(locale)(this.getStateAsJS())

    handleChange = (locale: Locale) => (fieldName: string, newValue: any) => {
      this.props.onChange(
        uppendTranslation(locale, {
          ...this.getValue(locale),
          [fieldName]: newValue,
        })(this.getStateAsJS()),
      )
    }

    updateProps = (locale: Locale) => ({
      ...this.props,
      key: locale,
      onChangeObject: this.handleChange(locale),
      value: fromJS(this.getValue(locale)),
    })

    render = () => (
      <div>
        {locales.map(locale => (
          <ObjectWidgetPreview {...this.updateProps(locale)} />
        ))}
      </div>
    )
  }
}
