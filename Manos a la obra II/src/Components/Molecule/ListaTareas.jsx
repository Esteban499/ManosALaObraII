import React, { Component } from 'react'
import Item from '../Atom/Item'

export default class ListaTareas extends Component {
  render() {
    return (
      <div>
        <Item name="Lista N"/>
        <Item name="Tarea N-1"/>
        <Item name="Tarea completa 2"/>
        <Item name="Tarea K"/>
        <Item name="Tarea completa N-2"/>
      </div>
    )
  }
}
