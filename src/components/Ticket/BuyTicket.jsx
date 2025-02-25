import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Popover, PopoverContent } from "../ui/popover";
import { FileInput } from "./FileInput";
import { TicketDialog } from "./TicketDialog";
import { fetchShows } from "@/api";
import { Button } from "../ui/button";
import { PopoverTrigger } from "@radix-ui/react-popover";

export const BuyTicket = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchShows();

      setShows(response);
    };

    fetchData();
  }, []);

  const userImageState = useState(null);

  const [userImage, setUserImage] = userImageState;
  const [error, setError] = useState(false);
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const formLabels = [
    { label: "Foto para identificação", type: "file", name: "photo" },
    { label: "Nome", type: "text", name: "name" },
    { label: "E-mail", type: "email", name: "email" },
    { label: "CPF", type: "text", name: "cpf" },
    { label: "Telefone", type: "text", name: "phone" },
    { label: "Show que deseja ir", type: "select", name: "show" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (!userImage) {
      setError(true);
      return;
    }

    setUserData(Object.fromEntries(formData));
    setIsTicketOpen(true);
  };

  return (
    <Card className="w-1/2">
      <CardHeader className="w-full space-y-4">
        <CardTitle className="w-fit mx-auto">
          Vamos curtir essa onda boa?
        </CardTitle>
        <CardDescription className="text-center">
          Garanta já o seu ingresso para o FASC 2077, não perca essa chance!
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center justify-center gap-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 w-fit">
          {formLabels.map(({ label, type, name }) => {
            if (type === "file") {
              return (
                <Popover open={error} onOpenChange={setError}>
                  <PopoverTrigger></PopoverTrigger>
                  <PopoverContent
                    align="center"
                    className="text-red-500 w-96 absolute top-1/2 left-1/2"
                  >
                    É necessário enviar uma foto para identificação.
                  </PopoverContent>
                  <FileInput
                    className="col-span-2"
                    label={label}
                    name={name}
                    imageState={userImageState}
                  />
                </Popover>
              );
            }

            return (
              <label key={label} className="flex flex-col gap-2 text-start">
                {label}
                {type === "select" ? (
                  <select
                    className="text-black p-2 rounded-md"
                    name={name}
                    required
                  >
                    <option value="">Selecione um show</option>
                    {shows.map(({ name }) => (
                      <option className="text-black" value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    required
                    className="text-black p-2 rounded-md"
                    type={type}
                    name={name}
                  />
                )}
              </label>
            );
          })}
          <Button
            variant="outline"
            type="submit"
            className="col-span-2 w-fit bg-zinc-700"
          >
            Adquirir ingresso
          </Button>
        </form>

        <TicketDialog
          isOpen={isTicketOpen}
          image={userImage}
          name={userData.name}
          show={userData.show}
          onOpenChange={setIsTicketOpen}
        />
      </CardContent>
    </Card>
  );
};
