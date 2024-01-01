import { Autocomplete, Button, Drawer, Group, Menu, Text, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react'

export function SamplePage() {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Autocomplete
        label="Your favorite library"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
        xxxxx
      </Drawer>
      <Group>
        <Button onClick={open}>Open Drawer</Button>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
            >
              Settings
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessageCircle
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
            >
              Messages
            </Menu.Item>

            <Menu.Item
              leftSection={
                <IconPhoto
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
            >
              Gallery
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconSearch
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
              rightSection={
                <Text size="xs" c="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item
              leftSection={
                <IconArrowsLeftRight
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
            >
              Transfer my data
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={
                <IconTrash
                  style={{
                    width: rem(14),
                    height: rem(14),
                  }}
                />
              }
            >
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </>
  )
}
