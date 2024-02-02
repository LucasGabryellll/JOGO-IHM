import { PointFetch } from "./fetch/pointFetch"

const controller = {
  useFetch: PointFetch
}

export function usePointController() {
  return {
    pointFetch: () => controller.useFetch()
  }
}