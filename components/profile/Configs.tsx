import { YStack, Text, Button } from "tamagui";
import { Link } from "expo-router";
import { UserCircle, MapPin, CreditCard, History, Heart, HelpCircle, Settings} from "@tamagui/lucide-icons";
import ConfigCard from "./ConfigCard";

export default function Configs() {
    return (
        <YStack 
            gap={20}
            width={"90%"}
        >
            <YStack
                gap={10}
            >
                <ConfigCard icon={UserCircle} title="Meus Dados" description="Editar informações pessoais" />
                <ConfigCard icon={MapPin} title="Endereços" description="Gerenciar endereços de entrega" />
                <ConfigCard icon={CreditCard} title="Formas de Pagamento" description="Cartões e métodos de pagamento" />
                <ConfigCard icon={History} title="Histórico de Pedidos" description="Ver pedidos anteriores" />
                <ConfigCard icon={Heart} title="Favoritos" description="Seus produtos favoritos" />
                <ConfigCard icon={HelpCircle} title="Ajuda e Suporte" description="Central de ajuda e contato" />
                <ConfigCard icon={Settings} title="Configurações" description="Notificações e preferências" />
            </YStack>
            <Link href={"/"} asChild>
                <Button
                    bg={"$primary"}
                    size={"$5"}
                    elevation={5}
                    shadowColor={"#000"}
                    shadowOpacity={0.20}
                >
                    <Text
                        color={"$gray100"}
                        fontFamily={"$heading"}
                        fontWeight={"$3"}
                        textTransform="uppercase"
                    >Sair da Conta</Text>
                </Button>
            </Link>
        </YStack>
    );
}