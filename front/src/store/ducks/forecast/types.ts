/**
 * Action types
 */
export enum ForecastTypes {
  LOAD_REQUEST = '@forecast/LOAD_REQUEST',
  LOAD_SUCCESS = '@forecast/LOAD_SUCCESS',
  LOAD_FAILURE = '@forecast/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Forecast {
  id: number
  name: string
}

/**
 * State types
 */
export interface ForecastState {
  readonly data: Forecast[]
  readonly loading: boolean
  readonly error: boolean
}