import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(pages)/explore')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /(pages)/explore!'
}
