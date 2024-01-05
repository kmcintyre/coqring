export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <title>CoqRing</title>          
        </head>
        <body>{children}</body>
      </html>
    )
  }