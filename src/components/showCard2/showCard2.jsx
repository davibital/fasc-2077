import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function ShowCard2({ show }) {
  return (
  <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="w-full text-center">{show.name}</CardTitle>
      </CardHeader>
      <CardContent>
      <img className="rounded-2xl" src={show.imgUrl} alt={show.name} />
      <div>
        <p><strong>Descrição:</strong> {show.description}</p>
        <p><strong>Tipo:</strong> {show.type}</p>
        <p><strong>Data de Início:</strong> {new Date(show.startDate).toLocaleString()}</p>
        <p><strong>Data de Término:</strong> {new Date(show.endDate).toLocaleString()}</p>
        <p><strong>Localização:</strong> {show.location}</p>
      </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="" className="bg-blue"><Link className="no-underline" to={`/shows/${show.name}`}>Ver detalhes</Link></Button>
      </CardFooter>
    </Card>
  )
}