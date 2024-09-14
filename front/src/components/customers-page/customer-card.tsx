import Card from "@components/card/card"

type CustomerCardProps = {
  customer: Users
  onClick?: () => void
}

export default function CustomerCard({ customer, onClick }: CustomerCardProps) {
  return (
    <Card className="text-gray-dark h-fit" tabIndex={0} onClick={onClick}>
      <h2 className="mb-2"><strong>Cliente:</strong> {customer.name}</h2>
      <p className="text-sm"><strong>CPF:</strong> {customer.cpf}</p>
      <p className="text-sm"><strong>Telefone:</strong> {customer.phone_number}</p>
    </Card>
  )
}