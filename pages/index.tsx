import BasicBoxContainer from "@/components/container/BasicBoxContainer";
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/container/Grid";
import Image from "next/image";

export default function HomePages() {
    return (
        <Layout>
            <Grid>
                <BasicBoxContainer color="emerald">
                    <h1 className="text-3xl font-bold text-center">Grasa Punch Green</h1>
                    <h2 className="text-xl font-bold text-center">the original arasgrasa energy drink</h2>
                    <Image src="/can_variant_1.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4" />
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full">
                        Buy Now
                    </button>
                </BasicBoxContainer>
                <BasicBoxContainer color="red">
                    <h1 className="text-3xl font-bold text-center">Grasa Punch Boost</h1>
                    <h2 className="text-xl font-bold text-center">the original arasgrasa energy drink</h2>
                    <Image src="/can_variant_2.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4" />
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full">
                        Buy Now
                    </button>
                </BasicBoxContainer>
                <BasicBoxContainer color="sky">
                    <h1 className="text-3xl font-bold text-center">Grasa Punch Juice</h1>
                    <h2 className="text-xl font-bold text-center">the original arasgrasa energy drink</h2>
                    <Image src="/can_variant_3.png" alt="logo" width={125} height={125} className="mx-auto mt-4 mb-4" />
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full">
                        Buy Now
                    </button>
                </BasicBoxContainer>
            </Grid>
        </Layout>
    );
}