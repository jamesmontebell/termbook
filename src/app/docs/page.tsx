import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/app/components/table";

export default function posts() {
  return (
    <>
      <Table>
        <TableCaption>Your Journal</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Entries</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Entry #1</TableCell>
            <TableCell>2024-01-01</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
