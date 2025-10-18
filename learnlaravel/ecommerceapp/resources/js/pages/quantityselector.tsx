import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);
    function quantityAdd() {
        setQuantity(quantity + 1);
    }
    function quantitySubtract() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <>
            <div className="flex w-32 justify-between border-1 border-black p-3">
                <button>
                    <ChevronLeft className="cursor-pointer" onClick={quantitySubtract} />
                </button>
                <span>{quantity}</span>
                <button>
                    <ChevronRight className="cursor-pointer" onClick={quantityAdd} />
                </button>
            </div>
        </>
    );
}
