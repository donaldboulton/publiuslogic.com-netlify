import * as React from 'react'
import Section from '@/components/Section'

export default function CTA() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-4 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-6">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-2xl">
          <span className="block text-slate-900 dark:text-slate-200">Ready to give it a try?</span>
          <span className="block text-slate-900 dark:text-slate-200">Use the starter on Github today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://github.com/donaldboulton/publiuslogic.com/generate"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-wine-400 px-5 py-3 text-base font-medium text-slate-300 hover:bg-wine-400"
            >
              Use Template
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://github.com/donaldboulton/publiuslogic.com"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-wine-300 px-5 py-3 text-base font-medium text-slate-300 hover:bg-wine-300"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
