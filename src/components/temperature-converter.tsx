'use client'

import { useMachine } from '@xstate/react'
import { temperatureMachine } from '@/machines/temperature-machine'

export default function TemperatureConverter() {
  const [state, send] = useMachine(temperatureMachine)

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    send({ type: 'CELSIUS', value: e.target.value })
  }

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    send({ type: 'FAHRENHEIT', value: e.target.value })
  }

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">温度変換器</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="celsius" className="block text-sm font-medium text-gray-700 mb-1">
            摂氏 (°C)
          </label>
          <input
            id="celsius"
            type="number"
            value={state.context.tempC ?? ''}
            onChange={handleCelsiusChange}
            placeholder="摂氏を入力"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="fahrenheit" className="block text-sm font-medium text-gray-700 mb-1">
            華氏 (°F)
          </label>
          <input
            id="fahrenheit"
            type="number"
            value={state.context.tempF ?? ''}
            onChange={handleFahrenheitChange}
            placeholder="華氏を入力"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}