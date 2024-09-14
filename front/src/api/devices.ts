import customFetch from "."

export function getDevices() {
  return customFetch('/devices', {
    method: 'GET'
  })
}

export function createDevice(data: CreateDevice) {
  return customFetch('/devices', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function updateDeviceStatus(id: string, data: UpdateDeviceStatus) {
  return customFetch(`/devices/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function UpdateDeviceSolution(id: string, data: UpdateDeviceSolution) {
  return customFetch(`/devices/${id}/solution`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function deleteDevice(id: string) {
  return customFetch(`/devices/${id}`, {
    method: 'DELETE'
  })
}
