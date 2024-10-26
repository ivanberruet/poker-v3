'use client'
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppContext } from '@/context';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function AvailableChips() {
  const { settings, setSettings } = useAppContext();
  const handleChange = (value, boxName) => {
    console.log(boxName, value);
    setSettings({
      ...settings,
      chips: {
        ...settings.chips,
        available: settings.chips.available.map((box) => {
          if (box.name === boxName) {
            return { ...box, active: value };
          }
          return box;
        })
      },
    })
  }; 

  return (
    <Table className="w-fit lg:min-w-full">
      <TableHeader>
        <TableRow className="h-[50px] bg-muted/50">
          <TableHead className="w-[100px]">Fichas</TableHead>
          <TableHead className="font-medium text-white"><FontAwesomeIcon icon={faCircle} /></TableHead>
          <TableHead className="font-medium text-red-500"><FontAwesomeIcon icon={faCircle} /></TableHead>
          <TableHead className="font-medium text-green-500"><FontAwesomeIcon icon={faCircle} /></TableHead>
          <TableHead className="font-medium text-blue-500"><FontAwesomeIcon icon={faCircle} /></TableHead>
          <TableHead className="font-medium text-black"><FontAwesomeIcon icon={faCircle} /></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {settings.chips.available.map((box) => (
          <TableRow key={box.name} className="h-[50px]">
            <TableCell>{box.name}</TableCell>
            <TableCell>{box.white.quantity}</TableCell>
            <TableCell>{box.red.quantity}</TableCell>
            <TableCell>{box.green.quantity}</TableCell>
            <TableCell>{box.blue.quantity}</TableCell>
            <TableCell>{box.black.quantity}</TableCell>
            <TableCell><Switch defaultChecked={box.active} onCheckedChange={(value) => handleChange(value, box.name)} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
