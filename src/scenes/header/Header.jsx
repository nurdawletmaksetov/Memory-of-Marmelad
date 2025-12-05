import { Cat } from "lucide-react"
import { Container } from "../../container/container"

const Header = () => {
    return (
        <div className="bg-primary py-5">
            <Container>
                <div className="flex items-center justify-center gap-2">
                    <h1 className="text-xl font-bold text-neutral-200">For Marmelad's Memory</h1>
                </div>
            </Container>
        </div>
    )
}

export default Header