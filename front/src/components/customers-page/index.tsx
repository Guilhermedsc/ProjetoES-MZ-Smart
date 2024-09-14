'use client'

import { useEffect, useState } from "react"
import RegisterCustomer from "./register-customer"
import Spinning from "@components/spinning"
import { getUsers } from "@api/users"
import CustomerCard from "./customer-card"
import CustomerDetailsModal from "./customer-details-modal"

export default function CustomersPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [customers, setCustomers] = useState<Users[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<Users | null>(null)

  useEffect(() => {
    getUsers().then((response) => response.json().then((customers) => {
      setCustomers(customers)
      setIsLoading(false)
    }))
  }, [])

  return (
    <div className="p-4 bg-white rounded-md shadow">
      <span className="relative flex items-center justify-center mb-4">
        <h1 className="text-green-dark text-xl md:text-3xl font-bold">Clientes</h1>
				<RegisterCustomer />
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 min-h-[25rem] max-h-[calc(100vh-15rem)] overflow-y-auto p-1">
        {isLoading
          ? <Spinning />
          : <>
            {customers.map((customer) => (
              <CustomerCard key={customer._id} customer={customer} onClick={() => setSelectedCustomer(customer)} />
            ))}

            <CustomerDetailsModal customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
          </>
        }
      </div>
    </div>
	)
}