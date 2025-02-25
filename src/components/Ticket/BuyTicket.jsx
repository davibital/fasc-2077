import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FileInput } from "./FileInput";
import { TicketDialog } from "./TicketDialog";
import { fetchShows } from "@/api";

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
                <FileInput
                  className="col-span-2"
                  label={label}
                  name={name}
                  imageState={userImageState}
                />
              );
            }

            return (
              <label key={label} className="flex flex-col gap-2 text-start">
                {label}
                {type === "select" ? (
                  <select className="text-black p-2 rounded-md" name={name}>
                    <option value="">Selecione um show</option>
                    {shows.map(({ name }) => (
                      <option className="text-black" value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="text-black p-2 rounded-md"
                    type={type}
                    name={name}
                  />
                )}
              </label>
            );
          })}
          <button type="submit" className="col-span-2">
            Adquirir ingresso
          </button>
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
