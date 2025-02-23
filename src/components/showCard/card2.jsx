import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Card2(show) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={show.imgUrl} alt={show.name} className={image} />
                <div className={content}>
                    <h2 className={title}>{show.name}</h2>
                    <p><strong>Descrição:</strong> {show.description}</p>
                    <p><strong>Tipo:</strong> {show.type}</p>
                    <p><strong>Data de Início:</strong> {new Date(show.startDate).toLocaleString()}</p>
                    <p><strong>Data de Término:</strong> {new Date(show.endDate).toLocaleString()}</p>
                    <p><strong>Localização:</strong> {show.location}</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card> 
    )
} 