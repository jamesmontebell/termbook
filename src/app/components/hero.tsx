import Link from "next/link";

export const Hero = () => {
    return (
        <div className="pt-20">
            <div className="text-center px-8">
                <div className="mb-6">
                    <div className="relative inline-flex before:absolute before:inset-0">
                        <Link href="#" className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center
                        border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full
                        group border-slate-100/40" target="_blank">
                            <span className="relative inline-flex items-center">
                                Sign Up{" "}
                                <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5
                                transition-transform duration-150 ease-in-out ml-1">
                                    -&gt;
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}