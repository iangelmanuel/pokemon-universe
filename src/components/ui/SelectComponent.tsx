import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui-shadcn/select"

type DataContent = {
  value: string
  label: string
}

type Props = {
  data: DataContent[]
}

export function SelectComponent({ data }: Props) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Filtrar por..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filtros</SelectLabel>
          {data.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
