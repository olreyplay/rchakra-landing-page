import { useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function App() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("starter"); // conditional styling target
  const [submitted, setSubmitted] = useState(false);

  const emailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const canSubmit = emailValid && !submitted;

  return (
    <Box bg="gray.50" color="gray.900" minH="100vh">
      <Navbar />

      <Hero
        email={email}
        setEmail={setEmail}
        canSubmit={canSubmit}
        submitted={submitted}
        onSubmit={() => setSubmitted(true)}
      />

      <Features />

      <Pricing plan={plan} setPlan={setPlan} />

      <FinalCTA
        canSubmit={canSubmit}
        onSubmit={() => setSubmitted(true)}
        submitted={submitted}
      />

      <Footer />
    </Box>
  );
}

/* ----------------------------- Navbar ----------------------------- */

function Navbar() {
  return (
    <Box bg="white" borderBottomWidth="1px">
      <Container py={{ base: "4", md: "5" }}>
        <HStack justify="space-between">
          <HStack gap="3">
            <Box
              w="10"
              h="10"
              borderRadius="lg"
              bg="brand.500"
              _hover={{ bg: "brand.600" }}
              transition="background 0.2s"
            />
            <Text fontWeight="700">Pulse</Text>
          </HStack>

          <HStack
            gap={{ base: "2", md: "6" }}
            display={{ base: "none", md: "flex" }}
            color="gray.700"
          >
            <Text>Features</Text>
            <Text>Pricing</Text>
            <Text>FAQ</Text>
          </HStack>

          <Button
            colorPalette="brand"
            variant="solid"
            size="sm"
            _hover={{ bg: "brand.600" }}
            _active={{ bg: "brand.700" }}
          >
            Get Started
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}

/* ------------------------------ Hero ------------------------------ */

function Hero({ email, setEmail, canSubmit, submitted, onSubmit }) {
  return (
    <Container py={{ base: "10", md: "16" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={{ base: "10", md: "14" }}
        alignItems="center"
      >
        <Stack gap="6">
          <Stack gap="3">
            <Badge w="fit-content" colorPalette="brand" variant="subtle">
              New • Chakra UI Landing
            </Badge>

            <Heading size={{ base: "lg", md: "xl" }}>
              Build a branded landing page faster with Chakra UI
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
              Apply responsive props, interaction styling, and conditional UI
              states without writing custom CSS.
            </Text>
          </Stack>

          {/* Responsive layout: stacks on mobile, row on desktop */}
          <Stack
            direction={{ base: "column", sm: "row" }}
            gap="3"
            bg="white"
            borderWidth="1px"
            borderRadius="xl"
            p="3"
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              size={{ base: "md", md: "lg" }}
              borderRadius="lg"
              _focus={{
                boxShadow: "0 0 0 3px rgba(47, 107, 255, 0.35)",
                borderColor: "brand.500",
              }}
            />

            <Button
              size={{ base: "md", md: "lg" }}
              colorPalette="brand"
              isDisabled={!canSubmit}
              onClick={onSubmit}
              _hover={{ bg: canSubmit ? "brand.600" : "gray.200" }} // conditional styling
              _active={{ bg: canSubmit ? "brand.700" : "gray.200" }}
            >
              {submitted ? "Subscribed" : "Get updates"}
            </Button>
          </Stack>

          <HStack gap="4" flexWrap="wrap" color="gray.600">
            <Text>✓ No spam</Text>
            <Text>✓ Unsubscribe anytime</Text>
            <Text>✓ Weekly only</Text>
          </HStack>
        </Stack>

        <PreviewCard />
      </SimpleGrid>
    </Container>
  );
}

function PreviewCard() {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="2xl"
      p={{ base: "5", md: "7" }}
      boxShadow="sm"
    >
      <Stack gap="5">
        <HStack justify="space-between">
          <Heading size="sm">Live Preview</Heading>
          <Badge colorPalette="brand" variant="outline">
            Brand
          </Badge>
        </HStack>

        <Box borderWidth="1px" borderRadius="xl" p="4" bg="gray.50">
          <Stack gap="3">
            <Text fontWeight="600">Weekly product highlights</Text>
            <Text color="gray.700" fontSize="sm">
              Responsive layout, interaction states, and clean spacing — all
              with Chakra props.
            </Text>
            <Button
              colorPalette="brand"
              size="sm"
              _hover={{ bg: "brand.600" }}
              _active={{ bg: "brand.700" }}
            >
              Action
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

/* ---------------------------- Features ---------------------------- */

function Features() {
  const items = [
    {
      title: "Responsive Props",
      text: "Adapt spacing, layout, and typography across breakpoints with object or array syntax.",
    },
    {
      title: "Pseudo Props",
      text: "Style hover, focus, and active states directly on components for better UX.",
    },
    {
      title: "Conditional Styling",
      text: "Reflect UI state like disabled or selected without CSS files or class juggling.",
    },
  ];

  return (
    <Container pb={{ base: "12", md: "16" }}>
      <Stack gap="6">
        <Heading size="md">Built for real UI</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          {items.map((it) => (
            <Box
              key={it.title}
              bg="white"
              borderWidth="1px"
              borderRadius="xl"
              p="6"
            >
              <Stack gap="2">
                <Text fontWeight="700">{it.title}</Text>
                <Text color="gray.700" fontSize="sm">
                  {it.text}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

/* ---------------------------- Pricing ----------------------------- */

function Pricing({ plan, setPlan }) {
  const plans = [
    { id: "starter", name: "Starter", price: "$0", desc: "For trying it out" },
    { id: "pro", name: "Pro", price: "$12", desc: "For shipping faster" },
    { id: "team", name: "Team", price: "$29", desc: "For teams" },
  ];

  return (
    <Container pb={{ base: "12", md: "16" }}>
      <Stack gap="6">
        <HStack justify="space-between" align="end" flexWrap="wrap" gap="4">
          <Stack gap="1">
            <Heading size="md">Pricing</Heading>
            <Text color="gray.700" fontSize="sm">
              Select a plan to see conditional styling in action.
            </Text>
          </Stack>

          {/* Conditional styling: selected button */}
          <HStack bg="white" borderWidth="1px" borderRadius="xl" p="2" gap="2">
            {plans.map((p) => {
              const selected = plan === p.id;
              return (
                <Button
                  key={p.id}
                  size="sm"
                  variant={selected ? "solid" : "ghost"}
                  colorPalette={selected ? "brand" : "gray"}
                  onClick={() => setPlan(p.id)}
                  _hover={{
                    bg: selected ? "brand.600" : "gray.100",
                  }}
                  _active={{
                    bg: selected ? "brand.700" : "gray.200",
                  }}
                >
                  {p.name}
                </Button>
              );
            })}
          </HStack>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
          {plans.map((p) => {
            const selected = plan === p.id;
            return (
              <Box
                key={p.id}
                bg="white"
                borderWidth="1px"
                borderRadius="2xl"
                p="6"
                borderColor={selected ? "brand.500" : "gray.200"} // conditional styling
                boxShadow={selected ? "md" : "sm"}
                transition="box-shadow 0.2s, border-color 0.2s"
              >
                <Stack gap="3">
                  <HStack justify="space-between">
                    <Text fontWeight="700">{p.name}</Text>
                    {selected && (
                      <Badge colorPalette="brand" variant="subtle">
                        Selected
                      </Badge>
                    )}
                  </HStack>

                  <Heading size="lg">{p.price}</Heading>
                  <Text color="gray.700" fontSize="sm">
                    {p.desc}
                  </Text>

                  <Button
                    colorPalette={selected ? "brand" : "gray"}
                    variant={selected ? "solid" : "outline"}
                    _hover={{ bg: selected ? "brand.600" : "gray.50" }}
                    _active={{ bg: selected ? "brand.700" : "gray.100" }}
                  >
                    Choose {p.name}
                  </Button>
                </Stack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

/* ----------------------------- Final CTA -------------------------- */

function FinalCTA({ canSubmit, onSubmit, submitted }) {
  return (
    <Box bg="white" borderTopWidth="1px">
      <Container py={{ base: "10", md: "14" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="8" alignItems="center">
          <Stack gap="2">
            <Heading size="md">Ship UI faster</Heading>
            <Text color="gray.700">
              Use responsive props, pseudo props, and conditional styling in one
              consistent system.
            </Text>
          </Stack>

          <HStack justify={{ base: "start", md: "end" }}>
            <Button
              size="lg"
              colorPalette="brand"
              isDisabled={!canSubmit}
              onClick={onSubmit}
              _hover={{ bg: canSubmit ? "brand.600" : "gray.200" }}
              _active={{ bg: canSubmit ? "brand.700" : "gray.200" }}
            >
              {submitted ? "Subscribed" : "Get updates"}
            </Button>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

/* ------------------------------ Footer --------------------------- */

function Footer() {
  return (
    <Container py="10">
      <Text color="gray.600" fontSize="sm">
        © {new Date().getFullYear()} Pulse. Built with Chakra UI.
      </Text>
    </Container>
  );
}
