import Link from 'next/link';

import { MenuIcon, User } from 'lucide-react';

import { Button } from './ui/button';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const Navbar = async () => {
	return (
		<nav className='flex items-center justify-between border-y p-4 shadow md:justify-around'>
			<Link
				href='/'
				className='text-wrap text-2xl font-extrabold tracking-tighter md:text-3xl'
			>
				Paraise Hotel
			</Link>

			<div className='flex max-w-xs items-center space-x-2 font-bold md:max-w-lg'>
				<DropdownMenu>
					<DropdownMenuTrigger className='block rounded border p-2 md:hidden'>
						<MenuIcon aria-label='Menú móvil' />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Inicio</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Alquilar</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className='cursor-pointer' asChild>
							<Link href='/'>Habitaciones</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<div className='hidden items-center gap-x-6 md:flex'>
					<Link href='/'>Inicio</Link>
					<Link href='/'>Alquilar</Link>
					<Link href='/'>Habitaciones</Link>
					<Button>
						<User />
					</Button>
				</div>
			</div>
		</nav>
	);
};
